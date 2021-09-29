/*
MIT License

Copyright (c) 2020 Playground, https://www.playg.app

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
import { LightningElement, track, api } from 'lwc';

export default class Popover extends LightningElement {
    @api show;
    @api size;
    @api nubbin;
    @api variant;
    @api header;
    @api body;
    @api footer;

    @track hasRendered = false;

    @track showHeader = false;
    @track showFooter = false;
    @track showIcon = false;
    @track sectionClass;
    @track iconName;
    @track iconVariant;
    
    connectedCallback() {
        if (this.hasRendered == false) {
            this.hasRendered = true;

            this.sectionClass = 'slds-popover';
            this.iconVariant = '';

            //check if header is present
            if (this.header) {
                this.showHeader = true;
            }

            //check if footer is present
            if (this.header) {
                this.showFooter = true;
            }

            //Update classes depending upon Nubin
            this.updateNubin();

            //Udate classes depending upon variant
            this.updateVariant();

            //Udate classes depending upon size
            this.updateSize();
        }
    }

    updateNubin() {
        if (this.nubbin) {
            switch(this.nubbin){
                case 'left' :
                    this.sectionClass += ' slds-nubbin_left';
                    break;
                case 'left-top' :
                    this.sectionClass += ' slds-nubbin_left-top';
                    break;
                case 'left-bottom' :
                    this.sectionClass += ' slds-nubbin_left-bottom';
                    break;
                case 'top' :
                    this.sectionClass += ' slds-nubbin_top';
                    break;
                case 'top-left' :
                    this.sectionClass += ' slds-nubbin_top-left';
                    break;
                case 'top-right' :
                    this.sectionClass += ' slds-nubbin_top-right';
                    break;   
                case 'right' :
                    this.sectionClass += ' slds-nubbin_right';
                    break;
                case 'right-top' :
                    this.sectionClass += ' slds-nubbin_right-top';
                    break;
                case 'right-bottom' :
                    this.sectionClass += ' slds-nubbin_right-bottom';
                    break;
                case 'bottom' :
                    this.sectionClass += ' slds-nubbin_bottom';
                    break;
                case 'bottom-left' :
                    this.sectionClass += ' slds-nubbin_bottom-left';
                    break;
                case 'bottom-right' :
                    this.sectionClass += ' slds-nubbin_bottom-right';
                    break;
                default :
                    this.sectionClass += ' slds-nubbin_left';
            }
        } else {
            this.sectionClass += ' slds-nubbin_left';
        }
    }

    updateVariant() {
        if (this.variant) {
            switch(this.variant){
                case 'error' :
                    this.sectionClass += ' slds-popover_error';
                    this.iconName = 'utility:error';
                    this.showIcon = true;
                    this.iconVariant = 'inverse';
                    break;
                case 'warning' :
                    this.sectionClass += ' slds-popover_warning'
                    this.iconName = 'utility:warning';
                    this.showIcon = true;
                    break;
            }
        }
    }

    updateSize() {
        if (this.size) {
            switch(this.size){
                case 'small' :
                    this.sectionClass += ' slds-popover_small';
                    break;
                case 'medium' :
                    this.sectionClass += ' slds-popover_medium'
                    break;
                case 'large' :
                    this.sectionClass += ' slds-popover_large';
                    break;
                case 'full-width' :
                    this.sectionClass += ' slds-popover_full-width';
                    break;
                default :
                    this.sectionClass += ' slds-popover_small';
            }
        } else {
            this.sectionClass += ' slds-popover_small';
        }
    }

    closePopover() {
        this.show = false;
        this.dispatchEvent(new CustomEvent('close', {}));
    }
}