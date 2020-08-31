/*
 * @file: 枚举指令名称
 * @Date: 2020-08-28 15:56:53
 * @author: manyao.zhu
 */
export enum CommandType {
    Component = 'dt-vscode-plugin.addComponent',
    Directive = 'dt-vscode-plugin.addDirective',
    Module = 'dt-vscode-plugin.addModule',
    Pipe = 'dt-vscode-plugin.addPipe',
    Service = 'dt-vscode-plugin.addService',
    Class = 'dt-vscode-plugin.addClass',
    Enum = 'dt-vscode-plugin.addEnum',
    Interface = 'dt-vscode-plugin.addInterface',
    Route = 'dt-vscode-plugin.addRoute',
}
