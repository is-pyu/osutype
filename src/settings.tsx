const { SliderInput } = require('powercord/components/settings');
import React from "react";

function Settings (???: typeof React.PureComponent) {
  //render (props) {
    return (
      <div>
        <SliderInput
            minValue={1}
            maxValue={100}
            initialValue={this.props.getSetting('volume', 100)}
            onValueChange={(value) => {document.getElementById('osutype').volume = (value / 100);
            this.props.updateSetting('volume', value);}}
        >
            Volume
        </SliderInput>
      </div>
    );
  //}
};

export default Settings;
