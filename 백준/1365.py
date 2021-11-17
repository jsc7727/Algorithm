# https://www.acmicpc.net/problem/1365

# input
# 4
# 2 3 4 1

# output
# 1

n = int(input())
a = list(map(int, input().split()))
result = []

for i in range(n):
    if i == 0:
        result.append(a[0])
    if result[-1] < a[i]:
        result.append(a[i])
    else:
        start = 0
        end = len(result)
        while start < end:
            m = (start + end) // 2
            if result[m] < a[i]:
                start = m + 1
            else:
                end = m

        result[end] = a[i]

print(n-len(result))
