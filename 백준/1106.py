# https://www.acmicpc.net/problem/1106


# input
# 100 6
# 4 9
# 9 11
# 3 4
# 8 7
# 1 2
# 9 8

# output
# 45


c, n = map(int, input().split())
l = [list(map(int, input().split())) for i in range(n)]
dp = [0] + [100001] * (c + 101)

for cost, customer in l:
    for cur_customer in range(customer, c + 101):
        dp[cur_customer] = min(
            dp[cur_customer], dp[cur_customer - customer] + cost)

print(min(dp[c:c + 101]))
