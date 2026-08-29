// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as fs from 'fs-extra';
import * as path from 'path';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
    // Simple bootstrap-jQuery template inspired by Blazor Web App.
    let disposable = vscode.commands.registerCommand('cf-bootstrap-jq-template.createProject', async () => {
        const targetFolder = await vscode.window.showOpenDialog({
            canSelectFolders: true,
            openLabel: 'Choose project folder',
        });

        if (!targetFolder) {
            return;
        }

        const destination = targetFolder[0].fsPath;
        const source = path.join(context.extensionPath, 'sourcefiles', 'cf-bootstrap-jquery');

        try {
            await fs.copy(source, destination);
            vscode.window.showInformationMessage('Successfully created ColdFusion Bootstrap - jQuery project (simple template).');
        } catch (err) {
            let errorMessage = 'Error creating project.';
            if (err instanceof Error) {
                errorMessage += ' ' + err.message;
            }
            vscode.window.showErrorMessage(errorMessage);
        }
    });
    // Login bootstrap-jQuery template inspired by Blazor Web App.
    let disposableLogin = vscode.commands.registerCommand('cf-bootstrap-jq-template-login.createProject', async () => {
        const targetFolder = await vscode.window.showOpenDialog({
            canSelectFolders: true,
            openLabel: 'Choose project folder',
        });

        if (!targetFolder) {
            return;
        }

        const destination = targetFolder[0].fsPath;
        const source = path.join(context.extensionPath, 'sourcefiles', 'cf-bootstrap-jquery-login');

        try {
            await fs.copy(source, destination);
            vscode.window.showInformationMessage('Successfully created ColdFusion Bootstrap - jQuery project (login template).');
        } catch (err) {
            let errorMessage = 'Error creating project.';
            if (err instanceof Error) {
                errorMessage += ' ' + err.message;
            }
            vscode.window.showErrorMessage(errorMessage);
        }
    });
    context.subscriptions.push(disposable);
    context.subscriptions.push(disposableLogin);
}

// This method is called when your extension is deactivated
export function deactivate() {}