"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[997],{9997:function(e,t,T){function n(e){for(var t={},T=e.split(" "),n=0;n<T.length;++n)t[T[n]]=!0;return t}T.r(t),T.d(t,{ttcnCfg:function(){return R}});var E,C={name:"ttcn-cfg",keywords:n("Yes No LogFile FileMask ConsoleMask AppendFile TimeStampFormat LogEventTypes SourceInfoFormat LogEntityName LogSourceInfo DiskFullAction LogFileNumber LogFileSize MatchingHints Detailed Compact SubCategories Stack Single None Seconds DateTime Time Stop Error Retry Delete TCPPort KillTimer NumHCs UnixSocketsEnabled LocalAddress"),fileNCtrlMaskOptions:n("TTCN_EXECUTOR TTCN_ERROR TTCN_WARNING TTCN_PORTEVENT TTCN_TIMEROP TTCN_VERDICTOP TTCN_DEFAULTOP TTCN_TESTCASE TTCN_ACTION TTCN_USER TTCN_FUNCTION TTCN_STATISTICS TTCN_PARALLEL TTCN_MATCHING TTCN_DEBUG EXECUTOR ERROR WARNING PORTEVENT TIMEROP VERDICTOP DEFAULTOP TESTCASE ACTION USER FUNCTION STATISTICS PARALLEL MATCHING DEBUG LOG_ALL LOG_NOTHING ACTION_UNQUALIFIED DEBUG_ENCDEC DEBUG_TESTPORT DEBUG_UNQUALIFIED DEFAULTOP_ACTIVATE DEFAULTOP_DEACTIVATE DEFAULTOP_EXIT DEFAULTOP_UNQUALIFIED ERROR_UNQUALIFIED EXECUTOR_COMPONENT EXECUTOR_CONFIGDATA EXECUTOR_EXTCOMMAND EXECUTOR_LOGOPTIONS EXECUTOR_RUNTIME EXECUTOR_UNQUALIFIED FUNCTION_RND FUNCTION_UNQUALIFIED MATCHING_DONE MATCHING_MCSUCCESS MATCHING_MCUNSUCC MATCHING_MMSUCCESS MATCHING_MMUNSUCC MATCHING_PCSUCCESS MATCHING_PCUNSUCC MATCHING_PMSUCCESS MATCHING_PMUNSUCC MATCHING_PROBLEM MATCHING_TIMEOUT MATCHING_UNQUALIFIED PARALLEL_PORTCONN PARALLEL_PORTMAP PARALLEL_PTC PARALLEL_UNQUALIFIED PORTEVENT_DUALRECV PORTEVENT_DUALSEND PORTEVENT_MCRECV PORTEVENT_MCSEND PORTEVENT_MMRECV PORTEVENT_MMSEND PORTEVENT_MQUEUE PORTEVENT_PCIN PORTEVENT_PCOUT PORTEVENT_PMIN PORTEVENT_PMOUT PORTEVENT_PQUEUE PORTEVENT_STATE PORTEVENT_UNQUALIFIED STATISTICS_UNQUALIFIED STATISTICS_VERDICT TESTCASE_FINISH TESTCASE_START TESTCASE_UNQUALIFIED TIMEROP_GUARD TIMEROP_READ TIMEROP_START TIMEROP_STOP TIMEROP_TIMEOUT TIMEROP_UNQUALIFIED USER_UNQUALIFIED VERDICTOP_FINAL VERDICTOP_GETVERDICT VERDICTOP_SETVERDICT VERDICTOP_UNQUALIFIED WARNING_UNQUALIFIED"),externalCommands:n("BeginControlPart EndControlPart BeginTestCase EndTestCase"),multiLineStrings:!0},N=C.keywords,r=C.fileNCtrlMaskOptions,I=C.externalCommands,i=C.multiLineStrings,o=!1!==C.indentStatements,_=/[\|]/;function A(e,t){var T,n=e.next();if('"'==n||"'"==n)return t.tokenize=(T=n,function(e,t){for(var n,E=!1,C=!1;null!=(n=e.next());){if(n==T&&!E){var N=e.peek();N&&("b"!=(N=N.toLowerCase())&&"h"!=N&&"o"!=N||e.next()),C=!0;break}E=!E&&"\\"==n}return(C||!E&&!i)&&(t.tokenize=null),"string"}),t.tokenize(e,t);if(/[:=]/.test(n))return E=n,"punctuation";if("#"==n)return e.skipToEnd(),"comment";if(/\d/.test(n))return e.eatWhile(/[\w\.]/),"number";if(_.test(n))return e.eatWhile(_),"operator";if("["==n)return e.eatWhile(/[\w_\]]/),"number";e.eatWhile(/[\w\$_]/);var C=e.current();return N.propertyIsEnumerable(C)?"keyword":r.propertyIsEnumerable(C)?"atom":I.propertyIsEnumerable(C)?"deleted":"variable"}function O(e,t,T,n,E){this.indented=e,this.column=t,this.type=T,this.align=n,this.prev=E}function U(e,t,T){var n=e.indented;return e.context&&"statement"==e.context.type&&(n=e.context.indented),e.context=new O(n,t,T,null,e.context)}function a(e){var t=e.context.type;return")"!=t&&"]"!=t&&"}"!=t||(e.indented=e.context.indented),e.context=e.context.prev}var R={startState:function(){return{tokenize:null,context:new O(0,0,"top",!1),indented:0,startOfLine:!0}},token:function(e,t){var T=t.context;if(e.sol()&&(null==T.align&&(T.align=!1),t.indented=e.indentation(),t.startOfLine=!0),e.eatSpace())return null;E=null;var n=(t.tokenize||A)(e,t);if("comment"==n)return n;if(null==T.align&&(T.align=!0),";"!=E&&":"!=E&&","!=E||"statement"!=T.type)if("{"==E)U(t,e.column(),"}");else if("["==E)U(t,e.column(),"]");else if("("==E)U(t,e.column(),")");else if("}"==E){for(;"statement"==T.type;)T=a(t);for("}"==T.type&&(T=a(t));"statement"==T.type;)T=a(t)}else E==T.type?a(t):o&&(("}"==T.type||"top"==T.type)&&";"!=E||"statement"==T.type&&"newstatement"==E)&&U(t,e.column(),"statement");else a(t);return t.startOfLine=!1,n},languageData:{indentOnInput:/^\s*[{}]$/,commentTokens:{line:"#"}}}}}]);
//# sourceMappingURL=997.95929104.chunk.js.map