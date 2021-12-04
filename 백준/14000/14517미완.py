# https://www.acmicpc.net/problem/14517

# 팬린드롬 개수 구하기


from collections import *
from itertools import *

inp = list("abb")
result = len(inp)
for i in range(2, len(inp)):
    iters = combinations(inp, i)
    for k in iters:
        if k == k[::-1]:
            result += 1
print(result)
