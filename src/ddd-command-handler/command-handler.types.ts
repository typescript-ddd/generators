export interface CommandHandlerInput {
    /**
     * The name of the entity that will be affected by the action.
     * @example User
     */
    entityName: string;
    /**
     * The name of the action that will be performed on the entity.
     * @example create
     */
    actionName: "create" | "update" | "delete";
    /**
     * The properties that will be used to perform the action.
     * @example [{ name: "email", type: "string" }]
     */
    properties: { name: string; type: string; isNullable?: boolean }[];
    /**
     * The name of the view that will be updated.
     * @example UserView
     */
    viewName?: string;
}

export interface CommandHandlerTemplateData extends CommandHandlerInput {    
    /**
     * The name of the actor that will be performing the action.
     * @example UserCreator
     */
    actorName: string;
    /**
     * The name of the command that will be executed.
     * @example CreateUserCommand
     */
    commandName: string;
    /**
     * The name of the view that will be updated.
     * @example UserView
     */
    viewName: string;
}