<template>
    <div class="Analysis">
        <div class="flex-1 flex flex-col overflow-hidden">
            <main class="flex-1 bg-gray-100">
                <div class="container mx-auto px-6 py-8">
                    <nav class="rounded-lg mt-5 flex items-center justify-center flex-wrap bg-white py-4 lg:px-12 shadow">
                        <div class="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
                            <div class="flex items-center flex-shrink-0 text-gray-800 mr-16">
                                <span class="font-semibold text-2xl tracking-tight">Dashboard</span>
                            </div>
                        </div>
                    </nav>
                    <!-- This is an example component -->
                    <div class="mt-10">
                        <div class="container px-6 mx-auto grid">
                            <div class="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
                                <div class="flex items-center p-4 bg-white rounded-lg shadow-xs">
                                    <div class="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full">
                                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z">
                                            </path>
                                        </svg>
                                    </div>
                                    <div>
                                        <p class="mb-2 text-sm font-medium text-gray-600">
                                            Total Users
                                        </p>
                                        <p class="text-lg font-semibold text-gray-700">
                                            19238
                                        </p>
                                    </div>
                                </div>
                                <div class="flex items-center p-4 bg-white rounded-lg shadow-xs">
                                    <div class="p-3 mr-4 text-green-500 bg-green-100 rounded-full">
                                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z">
                                            </path>
                                        </svg>
                                    </div>
                                    <div>
                                        <p class="mb-2 text-sm font-medium text-gray-600">
                                            User active
                                        </p>
                                        <p class="text-lg font-semibold text-gray-700">
                                            120
                                        </p>
                                    </div>
                                </div>
                                <div class="flex items-center p-4 bg-white rounded-lg shadow-xs">
                                    <div class="p-3 mr-4 text-red-500 bg-red-100 rounded-full">
                                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z">
                                            </path>
                                        </svg>
                                    </div>
                                    <div>
                                        <p class="mb-2 text-sm font-medium text-gray-600">
                                            Users suspend
                                        </p>
                                        <p class="text-lg font-semibold text-gray-700">
                                            6389
                                        </p>
                                    </div>
                                </div>
                                <div class="flex items-center p-4 bg-white rounded-lg shadow-xs">
                                    <div
                                        class="p-3 mr-4 text-yellow-500 bg-yellow-100 rounded-full">
                                        <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <circle cx="12" cy="8" r="7"></circle>
                                            <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                                        </svg>
                                    </div>
                                    <div>
                                        <p class="mb-2 text-sm font-medium text-gray-600">
                                            User vip
                                        </p>
                                        <p class="text-lg font-semibold text-gray-700">
                                            828
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
<!--  -->
                    <div class="grid grid-cols-1 2xl:grid-cols-2 xl:gap-4 my-4">
                    <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                        <h3 class="text-xl leading-none font-bold text-gray-900 mb-10">Acquisition Overview</h3>
                        <div class="block w-full overflow-x-auto">
                            <table class="items-center w-full bg-transparent border-collapse">
                            <thead>
                                <tr>
                                    <th class="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">Top Channels</th>
                                    <th class="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">Users</th>
                                    <th class="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap min-w-140-px"></th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-100">
                                <tr class="text-gray-500">
                                    <th class="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Organic Search</th>
                                    <td class="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">5,649</td>
                                    <td class="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                                        <div class="flex items-center">
                                        <span class="mr-2 text-xs font-medium">30%</span>
                                        <div class="relative w-full">
                                            <div class="w-full bg-gray-200 rounded-sm h-2">
                                                <div class="bg-cyan-600 h-2 rounded-sm" style="width: 30%"></div>
                                            </div>
                                        </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="text-gray-500">
                                    <th class="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Referral</th>
                                    <td class="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">4,025</td>
                                    <td class="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                                        <div class="flex items-center">
                                        <span class="mr-2 text-xs font-medium">24%</span>
                                        <div class="relative w-full">
                                            <div class="w-full bg-gray-200 rounded-sm h-2">
                                                <div class="bg-orange-300 h-2 rounded-sm" style="width: 24%"></div>
                                            </div>
                                        </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="text-gray-500">
                                    <th class="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Direct</th>
                                    <td class="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">3,105</td>
                                    <td class="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                                        <div class="flex items-center">
                                        <span class="mr-2 text-xs font-medium">18%</span>
                                        <div class="relative w-full">
                                            <div class="w-full bg-gray-200 rounded-sm h-2">
                                                <div class="bg-teal-400 h-2 rounded-sm" style="width: 18%"></div>
                                            </div>
                                        </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="text-gray-500">
                                    <th class="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Social</th>
                                    <td class="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">1251</td>
                                    <td class="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                                        <div class="flex items-center">
                                        <span class="mr-2 text-xs font-medium">12%</span>
                                        <div class="relative w-full">
                                            <div class="w-full bg-gray-200 rounded-sm h-2">
                                                <div class="bg-pink-600 h-2 rounded-sm" style="width: 12%"></div>
                                            </div>
                                        </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="text-gray-500">
                                    <th class="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Other</th>
                                    <td class="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">734</td>
                                    <td class="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                                        <div class="flex items-center">
                                        <span class="mr-2 text-xs font-medium">9%</span>
                                        <div class="relative w-full">
                                            <div class="w-full bg-gray-200 rounded-sm h-2">
                                                <div class="bg-indigo-600 h-2 rounded-sm" style="width: 9%"></div>
                                            </div>
                                        </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="text-gray-500">
                                    <th class="border-t-0 align-middle text-sm font-normal whitespace-nowrap p-4 pb-0 text-left">Email</th>
                                    <td class="border-t-0 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4 pb-0">456</td>
                                    <td class="border-t-0 align-middle text-xs whitespace-nowrap p-4 pb-0">
                                        <div class="flex items-center">
                                        <span class="mr-2 text-xs font-medium">7%</span>
                                        <div class="relative w-full">
                                            <div class="w-full bg-gray-200 rounded-sm h-2">
                                                <div class="bg-purple-500 h-2 rounded-sm" style="width: 7%"></div>
                                            </div>
                                        </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                        <h3 class="text-xl leading-none font-bold text-gray-900 mb-10">Acquisition Overview</h3>
                        <div class="block w-full overflow-x-auto">
                            <table class="items-center w-full bg-transparent border-collapse">
                            <thead>
                                <tr>
                                    <th class="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">Top Channels</th>
                                    <th class="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">Users</th>
                                    <th class="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap min-w-140-px"></th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-100">
                                <tr class="text-gray-500">
                                    <th class="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Organic Search</th>
                                    <td class="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">5,649</td>
                                    <td class="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                                        <div class="flex items-center">
                                        <span class="mr-2 text-xs font-medium">30%</span>
                                        <div class="relative w-full">
                                            <div class="w-full bg-gray-200 rounded-sm h-2">
                                                <div class="bg-cyan-600 h-2 rounded-sm" style="width: 30%"></div>
                                            </div>
                                        </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="text-gray-500">
                                    <th class="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Referral</th>
                                    <td class="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">4,025</td>
                                    <td class="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                                        <div class="flex items-center">
                                        <span class="mr-2 text-xs font-medium">24%</span>
                                        <div class="relative w-full">
                                            <div class="w-full bg-gray-200 rounded-sm h-2">
                                                <div class="bg-orange-300 h-2 rounded-sm" style="width: 24%"></div>
                                            </div>
                                        </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="text-gray-500">
                                    <th class="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Direct</th>
                                    <td class="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">3,105</td>
                                    <td class="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                                        <div class="flex items-center">
                                        <span class="mr-2 text-xs font-medium">18%</span>
                                        <div class="relative w-full">
                                            <div class="w-full bg-gray-200 rounded-sm h-2">
                                                <div class="bg-teal-400 h-2 rounded-sm" style="width: 18%"></div>
                                            </div>
                                        </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="text-gray-500">
                                    <th class="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Social</th>
                                    <td class="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">1251</td>
                                    <td class="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                                        <div class="flex items-center">
                                        <span class="mr-2 text-xs font-medium">12%</span>
                                        <div class="relative w-full">
                                            <div class="w-full bg-gray-200 rounded-sm h-2">
                                                <div class="bg-pink-600 h-2 rounded-sm" style="width: 12%"></div>
                                            </div>
                                        </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="text-gray-500">
                                    <th class="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Other</th>
                                    <td class="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">734</td>
                                    <td class="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                                        <div class="flex items-center">
                                        <span class="mr-2 text-xs font-medium">9%</span>
                                        <div class="relative w-full">
                                            <div class="w-full bg-gray-200 rounded-sm h-2">
                                                <div class="bg-indigo-600 h-2 rounded-sm" style="width: 9%"></div>
                                            </div>
                                        </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="text-gray-500">
                                    <th class="border-t-0 align-middle text-sm font-normal whitespace-nowrap p-4 pb-0 text-left">Email</th>
                                    <td class="border-t-0 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4 pb-0">456</td>
                                    <td class="border-t-0 align-middle text-xs whitespace-nowrap p-4 pb-0">
                                        <div class="flex items-center">
                                        <span class="mr-2 text-xs font-medium">7%</span>
                                        <div class="relative w-full">
                                            <div class="w-full bg-gray-200 rounded-sm h-2">
                                                <div class="bg-purple-500 h-2 rounded-sm" style="width: 7%"></div>
                                            </div>
                                        </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            <!--  -->
                <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                    <h3 class="text-xl leading-none font-bold text-gray-900 mb-10">Acquisition Overview</h3>
                    <div class="block w-full overflow-x-auto">
                        <table class="items-center w-full bg-transparent border-collapse">
                            <thead>
                                <tr>
                                    <th class="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">Top Channels</th>
                                    <th class="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">Users</th>
                                    <th class="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap min-w-140-px"></th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-100">
                                <tr class="text-gray-500">
                                    <th class="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Organic Search</th>
                                    <td class="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">5,649</td>
                                    <td class="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                                    <div class="flex items-center">
                                        <span class="mr-2 text-xs font-medium">30%</span>
                                        <div class="relative w-full">
                                            <div class="w-full bg-gray-200 rounded-sm h-2">
                                                <div class="bg-cyan-600 h-2 rounded-sm" style="width: 30%"></div>
                                            </div>
                                        </div>
                                    </div>
                                    </td>
                                </tr>
                                <tr class="text-gray-500">
                                    <th class="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Referral</th>
                                    <td class="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">4,025</td>
                                    <td class="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                                    <div class="flex items-center">
                                        <span class="mr-2 text-xs font-medium">24%</span>
                                        <div class="relative w-full">
                                            <div class="w-full bg-gray-200 rounded-sm h-2">
                                                <div class="bg-orange-300 h-2 rounded-sm" style="width: 24%"></div>
                                            </div>
                                        </div>
                                    </div>
                                    </td>
                                </tr>
                                <tr class="text-gray-500">
                                    <th class="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Direct</th>
                                    <td class="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">3,105</td>
                                    <td class="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                                    <div class="flex items-center">
                                        <span class="mr-2 text-xs font-medium">18%</span>
                                        <div class="relative w-full">
                                            <div class="w-full bg-gray-200 rounded-sm h-2">
                                                <div class="bg-teal-400 h-2 rounded-sm" style="width: 18%"></div>
                                            </div>
                                        </div>
                                    </div>
                                    </td>
                                </tr>
                                <tr class="text-gray-500">
                                    <th class="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Social</th>
                                    <td class="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">1251</td>
                                    <td class="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                                    <div class="flex items-center">
                                        <span class="mr-2 text-xs font-medium">12%</span>
                                        <div class="relative w-full">
                                            <div class="w-full bg-gray-200 rounded-sm h-2">
                                                <div class="bg-pink-600 h-2 rounded-sm" style="width: 12%"></div>
                                            </div>
                                        </div>
                                    </div>
                                    </td>
                                </tr>
                                    <tr class="text-gray-500">
                                        <th class="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Other</th>
                                        <td class="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">734</td>
                                        <td class="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                                        <div class="flex items-center">
                                            <span class="mr-2 text-xs font-medium">9%</span>
                                            <div class="relative w-full">
                                                <div class="w-full bg-gray-200 rounded-sm h-2">
                                                    <div class="bg-indigo-600 h-2 rounded-sm" style="width: 9%"></div>
                                                </div>
                                            </div>
                                        </div>
                                        </td>
                                    </tr>
                                    <tr class="text-gray-500">
                                        <th class="border-t-0 align-middle text-sm font-normal whitespace-nowrap p-4 pb-0 text-left">Email</th>
                                        <td class="border-t-0 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4 pb-0">456</td>
                                        <td class="border-t-0 align-middle text-xs whitespace-nowrap p-4 pb-0">
                                        <div class="flex items-center">
                                            <span class="mr-2 text-xs font-medium">7%</span>
                                            <div class="relative w-full">
                                                <div class="w-full bg-gray-200 rounded-sm h-2">
                                                    <div class="bg-purple-500 h-2 rounded-sm" style="width: 7%"></div>
                                                </div>
                                            </div>
                                        </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                <!--  -->
                </div>
                
            </main>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: 'Analysis',
    data() {
        return {
            menu: [],
            sidebarOpen: false,
            slug:'',
            type: []
        };
    },
    components: {
    },
    mounted() {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res => {
            this.usersList = res.data;
            console.log(this.usersList)
        })
        .catch(error => {
            console.log(error)
            // Manage errors if found any
        })
    },
    created(){
        this.getProduct();
        this.getTypeAll();
    },
    methods:{
        
        getProduct () {
            this.menu = [];
            axios.get(this.$baseUrl+'Product/getAll')
                .then(res => {
                    res.data.value.products.forEach(item => {
                        this.menu.push(item) 
                    });
                })
                .catch(error => {
                    console.log(error)
                    // Manage errors if found any
            })
        },

        getTypeAll () {
            this.type = [];
            axios.get(this.$baseUrl+'Type/getAll')
                .then(res => {
                    res.data.value.type.forEach(item => {
                        this.type.push(item) 
                    });
                    console.log(this.type)
                })
                .catch(error => {
                    console.log(error)
                    // Manage errors if found any
            })
        },

        delProd(id){
            axios.delete(this.$baseUrl+'Product/deleteProduct/'+id)
                .then(res => {
                    
                    console.log(res)
                    this.getProduct();
                    alert("delete sucess")
                })
                .catch(error => {
                    console.log(error)
                    // Manage errors if found any
            })
        }
    }
}
</script>

<style>
ul {
  margin: 0 auto;
  width: 300px;
  text-align: left;  
}

li {
  display: block;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  padding: 15px;
}
</style>