# -*- coding: utf-8 -*-
p = "app/data/blogTranslations.ts"
s = open(p, encoding="utf-8").read()
start = s.find('"universal-vs-beam-vs-hybrid-wiper-blades"')
block = s[start:]
# literal escape text in the file: \u5212 = 划 (wrong), should be \u522e = 刮
print("literal \\u5212 count:", block.count("\\u5212"))
fixed = block.replace("\\u5212", "\\u522e")
print("after fix remaining:", fixed.count("\\u5212"))
s = s[:start] + fixed
open(p, "w", encoding="utf-8").write(s)
print("done")
