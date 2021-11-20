import collections
from typing import Collection, List
import time
start_time = time.time()


# def combinationSum(arr, count):
#     results = []
#     temp = []

#     def dfs(a, index):
#         if a < 0:
#             return
#         elif a == 0:
#             print("aa : ", temp)
#             results.append(temp[:])
#             return

#         for idx in range(index, len(arr)):
#             temp.append(arr[idx])
#             dfs(a-arr[idx], idx)
#             t = temp.pop()

#     dfs(count, 0)
#     return results


# print(combinationSum([2, 3, 6, 7], 7))
# print("--- %s seconds ---" % (time.time() - start_time))

# def combinationSum(candidates: List[int], target: int) \
#         -> List[List[int]]:
#     result = []

#     def dfs(csum, index, path):
#         # 종료 조건
#         if csum < 0:
#             return
#         if csum == 0:
#             result.append(path)
#             return

#         for i in range(index, len(candidates)):
#             dfs(csum - candidates[i], i, path + [candidates[i]])
#     dfs(target, 0, [])
#     return result


# print(combinationSum([2, 3, 6, 7], 7))

# graph = collections.defaultdict(list)
# for a, b in sorted([["MUC", "LHR"], ["JFK", "ZUC"], ["JFK", "SJC"], ["LHR", "SFO"]]):
#     graph[a].append(b)
# print(graph)

# route = []


# def test(g):
#     while graph[g]:
#         test(graph[g].pop(0))
#     route.append(g)


# test("JFK")
# print(route)


# class Solution:
#     # 문제에 적합한 비교 함수
#     @staticmethod
#     def to_swap(n1: int, n2: int) -> bool:
#         return str(n1) + str(n2) < str(n2) + str(n1)
#     # 삽입 정렬 구현

#     def largestNumber(self, nums: List[int]) -> str:
#         i = 1
#         while i < len(nums):
#             j = i
#             while j > 0 and self.to_swap(nums[j - 1], nums[j]):
#                 nums[j], nums[j - 1] = nums[j - 1], nums[j]
#                 j -= 1
#             i += 1
#         return str(int(''.join(map(str, nums))))
