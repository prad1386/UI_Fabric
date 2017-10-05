import * as React from 'react';
import styles from './HelloworldReact.module.scss';
import { IHelloworldReactProps } from './IHelloworldReactProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { Button, ButtonType, Nav, Panel, PanelType } from 'office-ui-fabric-react';
import {ColorPicker} from 'office-ui-fabric-react/lib/ColorPicker';
import './style.css';

export default class HelloworldReact extends React.Component<IHelloworldReactProps, any> {
 
  openNewsTab(evt, newsName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
       
    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(newsName).style.display = "block";

    var selectedTab = document.getElementsByClassName(newsName);
    for(var j = 0; j < selectedTab.length; j++)
    {
      selectedTab[j].className += " active";
    }

}

  public render(): JSX.Element {
    return (
      <div>
          <div id="tab1" className="tabcontent">
            <h3>News1</h3>
            <p>London is the capital city of England.</p>
          </div>

          <div id="tab2" className="tabcontent" style={{display:'none'}}>
            <h3>News2</h3>
            <p>Paris is the capital of France.</p> 
          </div>

          <div id="tab3" className="tabcontent" style={{display:'none'}}>
            <h3>News3</h3>
            <p>Tokyo is the capital of Japan.</p>
          </div>

          <div className="tab">
            <button className="tablinks tab1 active" onClick={()=>this.openNewsTab(event, 'tab1')}>News1</button>
            <button className="tablinks tab2" onClick={()=>this.openNewsTab(event, 'tab2')}>News2</button>
            <button className="tablinks tab3" onClick={()=>this.openNewsTab(event, 'tab3')}>News3</button>
          </div>
      </div>
    );
  }
}
