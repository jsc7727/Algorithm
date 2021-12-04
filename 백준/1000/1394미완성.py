#  https://www.acmicpc.net/problem/1394

# abcdefghijklmnopqrstuvwxyz
# ak

# 37

import sys
from itertools import permutations
# str1 = sys.stdin.readline()
# str2 = sys.stdin.readline()

str1 = "abcdefghijklmnopqrstuvwxyz"
str2 = "aa"


def fr(n, m):
    return m * fr(n, m-1) if m > n else 1


l = len(str1)
result = 0
for i in range(1, len(str2)+1):
    if i < len(str2):
        result += fr(l-i, l)

print(permutations(str1, len(str2)))
for k in permutations(str1, len(str2)):
    result += 1
    print("".join(k))
    if "".join(k) == str2:
        break
print(result)
