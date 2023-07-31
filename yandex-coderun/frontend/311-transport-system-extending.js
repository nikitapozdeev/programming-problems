function extendTransportSystem(earthRouteClass, moonRouteClass) {
  const parcels = [];
  for (const routeClass of [earthRouteClass, moonRouteClass]) {
    const originalTransfer = routeClass.prototype.transfer;
    routeClass.prototype.transfer = function(parcel) {
      originalTransfer.call(this, parcel);
      parcels.push({
        ...parcel,
        destination: 'Mothership',
        origin: parcel.destination
      });
    }
  }
  return parcels;
}