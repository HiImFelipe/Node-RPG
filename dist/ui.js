"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ink_1 = require("ink");
const ink_select_input_1 = __importDefault(require("ink-select-input"));
const colors_1 = __importDefault(require("./constants/colors"));
const options = [
    {
        label: "New Game",
        value: "newgame",
    },
    {
        label: "Quit",
        value: "quit",
    },
];
const handleSelect = (item) => {
    switch (item.value) {
        case "quit":
            process.exit(0);
        default:
            return;
    }
};
const App = () => {
    return (react_1.default.createElement(ink_1.Box, { flexDirection: "column", borderStyle: "double", padding: 1 },
        react_1.default.createElement(ink_1.Box, { marginBottom: 2, marginLeft: 2 },
            react_1.default.createElement(ink_1.Text, null,
                "Welcome to ",
                react_1.default.createElement(ink_1.Text, { color: colors_1.default.primary }, "Node RPG"),
                "!")),
        react_1.default.createElement(ink_select_input_1.default, { items: options, color: colors_1.default.contrast, onSelect: handleSelect })));
};
exports.default = App;
