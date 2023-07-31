const NODES = {
  TEXT: (node) => {
    return buildBlock({
      type: 'div',
      content: node.characters,
      className: node.type,
      style: getStyles(node),
    })
  },
  RECTANGLE: (node) => {
    return buildBlock({
      type: 'div',
      content: '',
      className: node.type,
      style: getRectangleStyles(node),
    })
  }
}

const PRIMARY_AXIS_ALIGN_ITEMS = {
  MIN: 'flex-start',
  MAX: 'flex-end',
  SPACE_BETWEEN: 'space-between',
  CENTER: 'center',
}

const COUNTER_AXIS_ALIGN_ITEMS = {
  MIN: 'flex-start',
  MAX: 'flex-end',
  BASELINE: 'baseline',
  CENTER: 'center',
}

const TEXT_STYLES_MAPPER = {
  fontFamily: (value) => `font-family: ${value};`,
  fontSize: (value) => `font-size: ${value}px;`,
  fontWeight: (value) => `font-weight: ${value};`,
  textAlignHorizontal: (value) => `text-align: ${value.toLowerCase()};`,
  lineHeightPx: (value) => `line-height: ${value}px;`,
}

const EFFECT_STYLES_MAPPER = {
  DROP_SHADOW: (effect) => {
    const { x, y } = effect.offset;
    const { radius, color } = effect;
    return `box-shadow: ${x}px ${y}px ${radius}px ${toRGBA(color)};`;
  }
}

const COLOR_STYLES_MAPPER = {
  backgroundColor: (value) => `background-color: ${toRGBA(value)};`,
  fills: (value) => {
    if (value.length > 0) {
      return `color: ${toRGBA(value[0].color)};`;
    }
  }
}

const CONTAINER_STYLES_MAPPER = {
  layoutMode: (value) => {
    if (value === 'HORIZONTAL') {
      return 'display: flex; flex-direction: row;';
    } else if (value === 'VERTICAL') {
      return 'display: flex; flex-direction: column;';
    }
    return '';
  },
  primaryAxisAlignItems: (value) => {
    if (PRIMARY_AXIS_ALIGN_ITEMS[value]) {
      return  `justify-content: ${PRIMARY_AXIS_ALIGN_ITEMS[value]};`;
    }

    return '';
  },
  counterAxisAlignItems: (value) => {
    if (PRIMARY_AXIS_ALIGN_ITEMS[value]) {
      return  `align-items: ${COUNTER_AXIS_ALIGN_ITEMS[value]};`;
    }

    return '';
  },
  layoutGrow: (value) => `flex-grow: ${value};`,
  itemSpacing: (value) => `gap: ${value}px;`,
  paddingLeft: (value) => `padding-left: ${value}px;`,
  paddingRight: (value) => `padding-right: ${value}px;`,
  paddingTop: (value) => `padding-top: ${value}px;`,
  paddingBottom: (value) => `padding-bottom: ${value}px;`,
}

function getStyles(node) {
  const styleArr = [
    'box-sizing: border-box;'
  ];

  if (node.style) {
    for (const [key, value] of Object.entries(node.style)) {
      if (TEXT_STYLES_MAPPER[key]) {
        styleArr.push(TEXT_STYLES_MAPPER[key](value));
      }
    }
  } else {
    for (const [key, value] of Object.entries(node)) {
      if (CONTAINER_STYLES_MAPPER[key]) {
        styleArr.push(CONTAINER_STYLES_MAPPER[key](value));
      }
    }
  }

  if (node.absoluteBoundingBox) {
    const { width, height } = node.absoluteBoundingBox;
    styleArr.push(`width: ${width}px;`);
    styleArr.push(`height: ${height}px;`);
  }

  if ((node.strokes || []).length > 0) {
    const [stroke] = node.strokes;
    styleArr.push(`border: ${node.strokeWidth || 1}px ${stroke.type.toLowerCase()} ${toRGBA(stroke.color)};`);
  }

  for (const property of ['backgroundColor', 'fills']) {
    if (COLOR_STYLES_MAPPER[property] && node[property]) {
      styleArr.push(COLOR_STYLES_MAPPER[property](node[property]));
    }
  }

  if (node.effects) {
    for (const effect of node.effects) {
      styleArr.push(EFFECT_STYLES_MAPPER[effect.type](effect));
    }
  }
  return styleArr.join(' ');
}

function getRectangleStyles(node) {
  const styleArr = [];
  if (node.absoluteBoundingBox) {
    const { width, height } = node.absoluteBoundingBox;
    styleArr.push(`width: ${width}px;`);
    styleArr.push(`height: ${height}px;`);
  }

  for (const property of ['fills']) {
    if (COLOR_STYLES_MAPPER[property] && node[property]) {
      styleArr.push(COLOR_STYLES_MAPPER['backgroundColor'](node[property][0].color));
    }
  }

  return styleArr.join(' ');
}

function toRGBA(color) {
  const { r, g, b, a } = color;
  return `rgba(${r * 255}, ${g * 255}, ${b * 255}, ${a * 255})`;
}

function buildBlock({ type, content, className, style }) {
    return `<${type} class="${className}" style="${style}">${content}</${type}>`;
};

function traverse(node, level = 0) {
  if ((node.children || []).length === 0) {
    return `${'\t'.repeat(level)}${NODES[node.type]?.(node) ?? ''}`;
  }

  const content = [];
  for (const child of node.children) {
    content.push(traverse(child, level + 1));
  }

  return buildBlock({
    type: 'div',
    content: content.join('\n'),
    className: node.type,
    style: getStyles(node),
  });
}

module.exports = function(json) {
  const [canvas] = json.document.children;
  return traverse(canvas.children[0]);
}