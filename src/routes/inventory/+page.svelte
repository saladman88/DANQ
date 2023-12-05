<script lang="ts">
    import { Table } from '@skeletonlabs/skeleton';
    import type { TableSource } from '@skeletonlabs/skeleton';
    import { tableMapperValues } from '@skeletonlabs/skeleton';

    import { Client, Databases, ID } from "appwrite";

    const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('656d6495263133e69c8e');

    const databases = new Databases(client);

    const sourceData = [
        { position: 1, name: 'Pop Rock', type: "joint", amount: '19' },
        { position: 2, name: 'Pop Rock', type: "1G", amount: '9' },
        { position: 3, name: 'Pop Rock', type: "3.5G", amount: '2' },
        { position: 4, name: 'Purple Pussy', type: "joint", amount: '6' },
        { position: 5, name: 'Purple Pussy', type: "1G", amount: '0' },
        { position: 5, name: 'Purple Pussy', type: "3,5G", amount: '0' },
    ];

    
    const tableSimple: TableSource = {
        // A list of heading labels.
        head: ['Name', 'Type', 'Amount'],
        // The data visibly shown in your table body UI.
        body: tableMapperValues(sourceData, ['name', 'type', 'amount']),
        // Optional: The data returned when interactive is enabled and a row is clicked.
        meta: tableMapperValues(sourceData, ['position', 'name', 'type', 'amount']),
        // Optional: A list of footer labels.
        foot: ['Total', '', '<code class="code">5</code>']
    };
				
</script>

<div class="container h-full mx-auto flex justify-center items-center">
    <div class="space-y-10 text-center flex flex-col items-center">

        <Table source={tableSimple} />

    </div>
</div>