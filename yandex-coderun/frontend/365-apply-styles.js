module.exports = function(html, css) {
  const addParentReference = (node, parent) => {
    if (!node) {
      return;
    }

    node.parent = parent;
    for (const child of (node.children || [])) {
      addParentReference(child, node);
    }
  }

  const removeParentReference = (node) => {
    if (!node) {
      return;
    }

    delete node.parent;
    for (const child of (node.children || [])) {
      removeParentReference(child, node);
    }
  }

  const findAll = (node, cssClass) => {
    let nodes = [];
    if (!node) {
      return nodes;
    }

    if (node.tag === cssClass) {
      node.parent 
      nodes.push(node);
    }

    for (const child of (node.children || [])) {
      nodes = nodes.concat(findAll(child, cssClass));
    }

    return nodes;
  }

  const applyStyles = (node, styles) => {
    if (!node || node.type !== "ELEMENT") {
      return;
    }

    node.styles = {
      ...node.styles,
      ...styles
    };

    for (const child of (node.children || [])) {
      applyStyles(child, styles);
    }
  }

  addParentReference(html);
  for (const style of css) {
    if (/^\S*\s{1}\S*$/.test(style.selector)) {
      // tag1 tag2 - descendant
      const [parentTag, childTag] = style.selector.split(' ');
      const nodes = findAll(html, parentTag);
      for (const node of nodes) {
        const children = findAll(node, childTag);
        for (const child of children) {
          applyStyles(child, style.declarations)
        }
      }
    } else if (/^\S* > \S*$/.test(style.selector)) {
      // tag1 > tag2 - child
      const [parentTag, childTag] = style.selector.split(' > ');
      const nodes = findAll(html, parentTag);
      for (const node of nodes) {
        const children =  node.children || [];
        for (const child of children) {
          if (child.tag === childTag) {
            applyStyles(child, style.declarations);
          }
        }
      }
    } else if (/^\S* \+ \S*$/.test(style.selector)) {
      // tag1 + tag2 - adjacent sibling
      const [parentTag, childTag] = style.selector.split(' + ');
      const nodes = findAll(html, parentTag);
      for (const node of nodes) {
        if (!node.parent) {
          continue;
        }

        const children = (node.parent.children || []).filter(({ type }) => type === 'ELEMENT');
        for (let i = 0; i < children.length - 1; i++) {
          if (children[i].tag === parentTag && children[i + 1].tag === childTag) {
            applyStyles(children[i + 1], style.declarations);
          }
        }
      }
    } else if (/^\S* ~ \S*$/.test(style.selector)) {
      // tag1 ~ tag2 - general sibling
      const [parentTag, childTag] = style.selector.split(' ~ ');
      const nodes = findAll(html, parentTag);
      for (const node of nodes) {
        if (!node.parent) {
          continue;
        }

        const children = (node.parent.children || []).filter(({ type }) => type === 'ELEMENT');
        let found = false;
        for (let i = 0; i < children.length; i++) {
          if (!found && children[i].tag === parentTag) {
            found = true;
            continue;
          }

          if (found && children[i].tag === childTag) {
            applyStyles(children[i], style.declarations);
          }
        }
      }
    } else {
      const tag = style.selector;
      const nodes = findAll(html, tag);
      for (const node of nodes) {
        applyStyles(node, style.declarations)
      }
    }
  }
  removeParentReference(html);

  return html;
}