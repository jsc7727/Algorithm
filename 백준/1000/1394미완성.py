#  https://www.acmicpc.net/problem/1394

# abcdefghijklmnopqrstuvwxyz
# ak

# 37

import sys
from itertools import permutations
# str1 = sys.stdin.readline()
# str2 = sys.stdin.readline()

# str1 = "abcdefghijklmnopqrstuvwxyz"
# str2 = "ak"


# def fr(n, m):
#     return m * fr(n, m-1) if m > n else 1


# l = len(str1)
# result = 0
# for i in range(1, len(str2)+1):
#     if i < len(str2):
#         result += fr(l-i, l)

# for k in permutations(str1, len(str2)):
#     result += 1
#     print("".join(k), str2)
#     if "".join(k) == str2:
#         break
# print(result)

import sys
str1 = sys.stdin.readline().strip()
str2 = sys.stdin.readline().strip()
str1Len = len(str1)
str2Len = len(str2)
ans = str1Len**(str2Len-1)

for i in range(str2Len):
    ans += (str1.index(str2[i]))*(str1Len**(str2Len-i-1))
if str1Len == 1:
    print(str2Len)
else:
    print(((ans+1) % 900528))
