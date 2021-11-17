# https://www.acmicpc.net/problem/13305


# input
# 4
# 2 3 1
# 5 2 4 1

# output
# 18

# 주유소


def main(d: list, p: list) -> None:
    result = 0
    m = 1000000001
    for i in range(len(p)-1):
        m = min(m, p[i])
        result += d[i] * m
    print(result)


c = int(input())
distances = list(map(int, input().split()))
prices = list(map(int, input().split()))
main(distances, prices)
