import sys
input = sys.stdin.readline


def find_parent(parent, x):  # Find 함수, 경로 축소 알고리즘
    print(x)
    if parent[x] != x:
        parent[x] = find_parent(parent, parent[x])
    return parent[x]


def union_parent(parent, a, b):  # Union 함수
    b = find_parent(parent, b)
    a = find_parent(parent, a)
    if a < b:
        parent[b] = a
    else:
        parent[a] = b


n, m = map(int, input().split())  # n과 m 입력
parent = [0]*(n+1)  # Parent list 정의, 초기 0

edges = []  # 간선 정보 list
result = 0  # result 0 초기화

for i in range(1, n+1):  # Parent list 초기화
    parent[i] = i

for _ in range(m):  # a,b,cost 입력 받음
    a, b, cost = map(int, input().split())
    edges.append((cost, a, b))

edges.sort()  # Sorting
print(parent)
print(edges)
last = 0

for edge in edges:  # Sorting 이후, 길의 값 덧셈
    print(edge, parent)
    cost, a, b = edge
    if find_parent(parent, a) != find_parent(parent, b):
        union_parent(parent, a, b)
        result += cost
        last = cost

print(result-last)  # 결과 출력
