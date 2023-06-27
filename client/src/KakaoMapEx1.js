import React, { useEffect } from "react";
import navermaps from "@react-navermaps/api";

function NaverMap() {
  useEffect(() => {
    const mapOptions = {
      center: new navermaps.LatLng(37.3595704, 127.105399),
      zoom: 10,
      mapTypeControl: true,
      mapTypeControlOptions: {
        style: navermaps.MapTypeControlStyle.DROPDOWN,
      },
    };

    const map = new navermaps.Map("map", mapOptions);

    const trafficLayer = new navermaps.TrafficLayer({
      interval: 300000,
    });

    const toggleTrafficLayer = () => {
      if (trafficLayer.getMap()) {
        trafficLayer.setMap(null);
      } else {
        trafficLayer.setMap(map);
      }
    };

    const toggleAutoRefresh = (e) => {
      const checked = e.target.checked;
      if (checked) {
        trafficLayer.startAutoRefresh();
      } else {
        trafficLayer.endAutoRefresh();
      }
    };

    navermaps.Event.once(map, "init_stylemap", () => {
      trafficLayer.setMap(map);
    });

    const btn = document.getElementById("traffic");
    btn.addEventListener("click", toggleTrafficLayer);

    const autoRefreshCheckbox = document.getElementById("autorefresh");
    autoRefreshCheckbox.addEventListener("change", toggleAutoRefresh);

    return () => {
      btn.removeEventListener("click", toggleTrafficLayer);
      autoRefreshCheckbox.removeEventListener("change", toggleAutoRefresh);
    };
  }, []);

  return (
    <div style={{ width: "100%", height: "400px" }}>
      <div id="map" style={{ width: "100%", height: "100%" }}></div>
      <button id="traffic">Toggle Traffic Layer</button>
      <label>
        <input id="autorefresh" type="checkbox" /> Auto Refresh
      </label>
    </div>
  );
}

export default NaverMap;
