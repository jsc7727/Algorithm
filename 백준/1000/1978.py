# https://www.acmicpc.net/problem/1978

# input
# 4
# 1 3 5 7

# output
# 3

input()
lst = list(map(int, input().split()))
answer = 0
for i in lst:
    answer += 1

    if i < 2:
        answer -= 1

    for j in range(2, i):
        if i % j == 0:
            answer -= 1
            break
print(answer)
