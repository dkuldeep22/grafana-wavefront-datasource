import { QueryCtrl } from "app/plugins/sdk";
import "./wf-directives.js";
import "../css/query.editor.css!";
export declare class WavefrontQueryCtrl extends QueryCtrl {
    static templateUrl: string;
    addTagMode: boolean;
    panel: any;
    constructor($scope: any, $injector: any);
    toggleEditorMode(): void;
    getErrorMessage(): string;
    autoCompleteMetric: (metric: any, callback: any) => void;
    autoCompleteTagKey: (key: any, callback: any) => void;
    autoCompleteTagValue: (key: any, callback: any) => void;
    autoCompleteQuery: (query: any, callback: any) => void;
    updateRawQueryCursor(keyUp: any): void;
    addTag(): void;
    addParenthesis(index: any): void;
    private fixTags;
    private findNthLeftAtom;
    private findNthRightAtom;
    private findMatchingParenthesis;
    expandParenthesis(index: any): void;
    narrowParenthesis(index: any): void;
    canExpand(index: any): boolean;
    canNarrow(index: any): boolean;
    removeParenthesis(index: any): void;
    removeTag(index: any): void;
    addFunction(definition: any): void;
    removeFunction(index: any): void;
    moveFunction(fromIndex: any, toIndex: any): void;
    addRegex(): void;
    removeRegex(index: any): void;
}