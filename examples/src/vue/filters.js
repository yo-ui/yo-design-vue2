/* eslint-disable no-undef */
// import moment from "moment";
import bmCommon from "@/common/common";

export default {
  install(Vue) {
    Vue.filter(
      "$dateFormat",
      (value, format = "YYYY-MM-DD HH:mm:ss", symbol = "--") => {
        let str = value;
        if (!str) {
          return symbol || str;
        }
        if (typeof str == "string") {
          str = Number(str);
        }
        if (isNaN(str)) {
          try {
            value = moment(value).format(format);
            return value;
          } catch (ex) {
            value = "";
          }
          if (!value) {
            return value;
          }
        }
        return moment(str).format(format);
      }
    );
    Vue.filter("countdown", (milliseconds, format, _double, showDay) => {
      if (format) {
        let day = parseInt(milliseconds / (1000 * 60 * 60 * 24), 10);
        let hour = parseInt(
          (milliseconds - day * 1000 * 60 * 60 * 24) / (1000 * 60 * 60),
          10
        );
        let minutes = parseInt(
          (milliseconds - day * 1000 * 60 * 60 * 24 - hour * 1000 * 60 * 60) /
            (1000 * 60),
          10
        );
        let seconds = parseInt(
          (milliseconds -
            day * 1000 * 60 * 60 * 24 -
            hour * 1000 * 60 * 60 -
            minutes * 1000 * 60) /
            1000,
          10
        );
        if (!showDay) {
          hour = day * 24 + hour;
          day = 0;
        }
        if (_double) {
          day = day < 10 ? "0" + day : day;
          hour = hour < 10 ? "0" + hour : hour;
          minutes = minutes < 10 ? "0" + minutes : minutes;
          seconds = seconds < 10 ? "0" + seconds : seconds;
        }
        return bmCommon.substitute(format, {
          dd: day,
          hh: hour,
          mm: minutes,
          ss: seconds
        });
      } else {
        return parseInt(milliseconds / 1000) + "s";
      }
    });
  }
};
