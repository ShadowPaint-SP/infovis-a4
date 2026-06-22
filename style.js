const _style = [{
    "selector": "core",
    "style": {
        "selection-box-color": "#AAD8FF",
        "selection-box-border-color": "#8BB0D0",
        "selection-box-opacity": "0.5"
    }
}, {
    "selector": "node",
    "style": {
        "width": "mapData(mins, 0, 1000, 10, 100)",
        "height": "mapData(mins, 0, 1000, 10, 100)",
        "content": "data(name)",
        "font-size": "12px",
        "text-valign": "center",
        "text-halign": "center",
        "background-color": "#555",
        "text-outline-color": "#555",
        "text-outline-width": "2px",
        "color": "#fff",
        "overlay-padding": "6px",
        "z-index": "10"
    }
}, {
    "selector": "node:selected",
    "style": {
        "border-width": "6px",
        "border-color": "#AAD8FF",
        "border-opacity": "0.5",
        "background-color": "#77828C",
        "text-outline-color": "#77828C"
    }
}, {
    "selector": "edge",
    "style": {
        "curve-style": "haystack", // bezier, taxi, ...
        "haystack-radius": "0.5",
        "opacity": "0.4",
        "line-color": "#bbb",
        "width": "mapData(weight, 0, 1, 1, 8)",
        "overlay-padding": "3px"
    }
}, {
    "selector": "node.magic",
    "style": {
        "background-opacity": 0.5,
        "border-opacity": 0,
        "label": " ",
        "text-opacity": 0,
        "text-outline-opacity": 0
    }
}, {
    "selector": "edge.magic",
    "style": {
        "curve-style": "haystack",
        "line-color": "#fbf",
        "width": "mapData(weight, 0, 1, 1, 8)",
        "overlay-padding": "3px"
    }
}]

export default _style;
