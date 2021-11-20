#  https://www.acmicpc.net/problem/1394

# abcdefghijklmnopqrstuvwxyz
# ak

# 37

import sys
str1 = sys.stdin.readline()
str2 = sys.stdin.readline()

# str1 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
# str2 = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"

result = 0
idx = 0
for i in range(len(str2)-1, -1, -1):
    result = (result + (str1.index(str2[i])+1) * len(str1)**idx)
    idx += 1
print(result % 900528)
