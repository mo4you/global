

function MediaObject(URL, width, height) {
    document.write('<object ID="VodPlayer" name="VodPlayer" classid="CLSID:22D6F312-B0F6-11D0-94AB-0080C74C7E95" codebase="http://activex.microsoft.com/activex/controls/mplayer/en/nsmp2inf.cab#Version=6,4,5,715"  standby="Loading Microsoft Windows Media Player components..." type="application/x-oleobject" align="middle" width="'+width+'" height="'+height+'">');
    document.write('  <param name="CurrentPosition" value="1">');
    document.write('  <param name="SetCurrentEntry" value="1">');
    document.write('  <param name="ClickToPlay" value="1">');
    document.write('  <param name="AutoSize" value="0">');
    document.write('  <param name="AutoStart" value="1">');
    document.write('  <param name="ShowControls" value="1">');
    document.write('  <param name="ShowAudioControls" value="1">');
    document.write('  <param name="ShowDisplay" value="0">');
    document.write('  <param name="ShowStatusBar" value="1">');
    document.write('  <param name="EnableContextMenu" value="0">');
    document.write('  <param name="ShowPositionControls" value="0">');
    document.write('  <param name="DisplayBackColor" value="0">');
    document.write('  <param name="ShowTracker" value="1">');
    document.write('  <param name="ShowCaptioning" value="0">');
    document.write('  <param name="AutoRewind" value="0">');
    document.write('  <param name="EnableTracker" value="1">');
    document.write('  <param name="Volume" value="-1">');
    document.write('  <param name="stretchToFit" value="0">');
    document.write('  <param name="Filename" value="'+URL+'">');
    document.write('</object>');
}
