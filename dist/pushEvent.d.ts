export default function createEventHandler(server: string, appId: string): {
    push: (api: string, payload: object) => void;
};
