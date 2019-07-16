<template>
    <div align="center">
        <p>Listing</p>
        <table v-if="showTable">
            <tr>
                <th>Key</th>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Salary</th>
            </tr>
            <tr v-for="item, key in loginModel" >
            <td>{{ key }}</td>
            <td>{{ item.id }}</td>
            <td>{{ item.employee_name }}</td>
            <td>{{ item.employee_age }}</td>
            <td>{{ item.employee_salary }}</td>
            </tr>
        </table>
    </div>
</template>
<script lang="ts" src="./listing.controller.ts"></script>

