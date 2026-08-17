# -*- coding: utf-8 -*-
import re
s = open("app/data/blogTranslations.ts", encoding="utf-8").read()
m = re.search(r'"universal-vs-beam-vs-hybrid-wiper-blades"(.{0,2000})', s, re.S)
blk = m.group(1) if m else ""
hits = list(re.finditer(r"雨(.)片", blk))
print("hits:", len(hits))
for mm in hits:
    print("char between 雨 and 片: U+%04X (%s)" % (ord(mm.group(1)), mm.group(1)))
# check title line
tl = re.search(r'title: "([^"]*)"', blk)
if tl:
    t = tl.group(1)
    print("title:", t)
