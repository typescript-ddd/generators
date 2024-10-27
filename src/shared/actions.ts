export const actionVerbs = ["create", "find", "update", "delete"];

export const getActionVerb = (action: string) => {
    switch (action) {
        case "create":
            return "creating";
        case "find":
            return "finding";
        case "update":
            return "updating";
        case "delete":
            return "deleting";
        default:
            return action;
    }
}

export const actionActors = ["Creator", "Finder", "Updater", "Deleter"];
export const getActionActor = (action: string) => {
    switch (action) {
        case "create":
            return "Creator";
        case "find":
            return "Finder";
        case "update":
            return "Updater";
        case "delete":
            return "Deleter";
        default:
            return action;
    }
}

export const actions = ["Create", "Find", "Update", "Delete"];
export const getAction = (action: string) => {
    switch (action) {
        case "create":
            return "Create";
        case "find":
            return "Find";
        case "update":
            return "Update";
        case "delete":
            return "Delete";
        default:
            return action;
    }
}