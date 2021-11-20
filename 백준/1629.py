# https://www.acmicpc.net/problem/1629

# 곱셈

# 자연수 A를 B번 곱한 수를 알고 싶다. 단 구하려는 수가 매우 커질 수 있으므로 이를 C로 나눈 나머지를 구하는 프로그램을 작성하시오.

# 첫째 줄에 A, B, C가 빈 칸을 사이에 두고 순서대로 주어진다. A, B, C는 모두 2,147,483,647 이하의 자연수이다.

# 첫째 줄에 A를 B번 곱한 수를 C로 나눈 나머지를 출력한다.

# 10 11 12

# 4

temp = 1
a, b, c = list(map(int, input().split()))
# while b:
#     print(a, b, c, b % 2 == 1, temp)
#     if (b % 2 == 1):
#         temp = temp * a
#     b //= 2
#     a = a * a

# print(temp)


def dnc(length):
    print(a, length, c)
    if length == 1:
        return a
    if length % 2 == 0:
        left = dnc(length // 2)
        return left * left
    else:
        left = dnc(length // 2)
        return left * left * a


print(dnc(b))
