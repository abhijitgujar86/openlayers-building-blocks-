//map obj of openlayer and bbox that we get from pg query
//SELECT ST_Extent(the_geom) as extent FROM sometable;
function setExtentFromBBOX(map,bbox)
{
  re = /\((.*)\)/i;
  bbox = bbox.match(re)[1];
  extent=bbox.split(/,| /)
  map.getView().fit(extent,map.getSize());
}
//setExtentFromBBOX(map,"BOX(8063160.69556053 2665970.73159917,8065634.57542576 2667623.26362307)");
setExtentFromBBOX(map,p_bbox);
