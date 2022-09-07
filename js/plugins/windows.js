SceneManager._screenWidth       = 1632;
SceneManager._screenHeight      = 720;
SceneManager._boxWidth          = 1632;
SceneManager._boxHeight         = 720;
//一格48*48
//目前為34*15

/**
 * @static
 * @method _switchStretchMode
 * @return {Boolean}
 * @private
 */
Graphics._switchStretchMode = function() {
    this._stretchEnabled = !this._stretchEnabled;
    this._updateAllElements();
};
