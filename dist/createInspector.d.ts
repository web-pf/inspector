export interface ICreateInspectorConfig {
    server: string;
    appId: string;
}
export declare const beaconApi: {
    performanceTiming: string;
};
export default function createInspector(inspectorConfig: ICreateInspectorConfig): void;
