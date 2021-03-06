"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.USER_HOME_DIR = exports.ROOT_DIR = exports.PATH_SEP = void 0;

var _path = _interopRequireDefault(require("path"));

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
var PATH_SEP = _path.default.sep || '/';
exports.PATH_SEP = PATH_SEP;

var ROOT_DIR = _path.default.resolve(_path.default.join(__dirname, '..', '..', '..'));

exports.ROOT_DIR = ROOT_DIR;

var USER_HOME_DIR = process.env.HOME || process.env.USERPROFILE || _path.default.join(process.env.HOMEDRIVE, process.env.HOMEPATH);

exports.USER_HOME_DIR = USER_HOME_DIR;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL3BhdGhzLmpzIl0sIm5hbWVzIjpbIlBBVEhfU0VQIiwicGF0aCIsInNlcCIsIlJPT1RfRElSIiwicmVzb2x2ZSIsImpvaW4iLCJfX2Rpcm5hbWUiLCJVU0VSX0hPTUVfRElSIiwicHJvY2VzcyIsImVudiIsIkhPTUUiLCJVU0VSUFJPRklMRSIsIkhPTUVEUklWRSIsIkhPTUVQQVRIIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFJQTs7QUFKQTs7O0FBTU8sSUFBTUEsUUFBUSxHQUFHQyxjQUFLQyxHQUFMLElBQVksR0FBN0I7OztBQUVBLElBQU1DLFFBQVEsR0FBR0YsY0FBS0csT0FBTCxDQUFhSCxjQUFLSSxJQUFMLENBQVVDLFNBQVYsRUFBcUIsSUFBckIsRUFBMkIsSUFBM0IsRUFBaUMsSUFBakMsQ0FBYixDQUFqQjs7OztBQUVBLElBQU1DLGFBQWEsR0FBR0MsT0FBTyxDQUFDQyxHQUFSLENBQVlDLElBQVosSUFDeEJGLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRSxXQURZLElBRXhCVixjQUFLSSxJQUFMLENBQVVHLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRyxTQUF0QixFQUFpQ0osT0FBTyxDQUFDQyxHQUFSLENBQVlJLFFBQTdDLENBRkUiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLiAqL1xuXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcblxuZXhwb3J0IGNvbnN0IFBBVEhfU0VQID0gcGF0aC5zZXAgfHwgJy8nO1xuXG5leHBvcnQgY29uc3QgUk9PVF9ESVIgPSBwYXRoLnJlc29sdmUocGF0aC5qb2luKF9fZGlybmFtZSwgJy4uJywgJy4uJywgJy4uJykpO1xuXG5leHBvcnQgY29uc3QgVVNFUl9IT01FX0RJUiA9IHByb2Nlc3MuZW52LkhPTUVcbiAgfHwgcHJvY2Vzcy5lbnYuVVNFUlBST0ZJTEVcbiAgfHwgcGF0aC5qb2luKHByb2Nlc3MuZW52LkhPTUVEUklWRSwgcHJvY2Vzcy5lbnYuSE9NRVBBVEgpO1xuIl0sImZpbGUiOiJ1dGlscy9wYXRocy5qcyJ9
