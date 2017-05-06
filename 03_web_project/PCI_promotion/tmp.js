/**
 * Created by changpzh on 2016/6/20.
 */
var data = [
 {"_id":"575f739abc8e586de023760d","bl":"lte-n","product":"tdd-macro","branch":"trunk","day":"2016-05-17","timestamp":1463500740,
    "result":[{"name":"qt","auto":"TL00_ENB_9999_160517_045380","manual":"TL00_ENB_9999_160517_045388","order":101},
    {"name":"cit","auto":"TL00_ENB_9999_160517_045390","manual":"TL00_ENB_9999_160517_045399","order":201}]
 },
 {"_id":"575f739abc8e586de023760e","bl":"lte-n","product":"tdd-macro","branch":"trunk","day":"2016-06-17","timestamp":1463500740,"result":[{"name":"qt","auto":"TL00_ENB_9999_160617_045380","manual":"TL00_ENB_9999_160617_045388","order":1},{"name":"cit","auto":"TL00_ENB_9999_160617_045390","manual":"TL00_ENB_9999_160617_045399","order":201}]
 }
];
console.log(typeof data);
//console.log(data)

(data || []).forEach(function (d) {
    console.log("==========");
    console.log(d)
});