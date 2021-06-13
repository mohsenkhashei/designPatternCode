import { Button } from "./Button";
import { ListBox } from "./ListBox";
import { TextBox } from "./TextBox";
import { EventHandler } from "./EventHandler";

export class ArticleDialogBox {
    private articlesListBox: ListBox = new ListBox();
    private titleTextBox: TextBox = new TextBox();
    private saveButton: Button = new Button();

    constructor() {
        const _self = this;
        this.articlesListBox.addEventHandler(new class implements EventHandler {
            handle(): void {
                _self.articleSelected();
                _self.titleChanged();
            }
        });
    
    }

    simulateUserInteraction(): void {
        this.articlesListBox.setSelection("Article 1");
        this.titleTextBox.setContent("");
        this.titleTextBox.setContent("Article 2");
        console.log("Textbox: " + this.titleTextBox.getContent());
        console.log("Button:: " + this.saveButton.isEnabled()); 
    }

    titleChanged(): void {
        var content = this.titleTextBox.getContent();
        var isEmpty = (content == null || content == undefined);
        this.saveButton.setEnabled(!isEmpty);
    }

    articleSelected(): void {
        this.titleTextBox.setContent(this.articlesListBox.getSelection());
        this.saveButton.setEnabled(true);
    }

}
