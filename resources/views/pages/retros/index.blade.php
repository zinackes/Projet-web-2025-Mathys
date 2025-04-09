<x-app-layout>
    <x-slot name="header">
        <h1 class="flex items-center gap-1 text-sm font-normal">
            <span class="text-gray-700">
                {{ __('Retrospectives') }}
            </span>
        </h1>
    </x-slot>
    <div id="toolbar" class="wx-material-theme"></div>
    <div id="root" class="wx-material-theme"></div>

    <script src="{{ asset('kanban/dist/kanban.js') }}"></script>
    <script>

        function getData() {
            const users = [
                {
                    id: 1,
                    label: "Steve Smith",
                    avatar: "https://snippet.dhtmlx.com/codebase/data/kanban/03/user1.png",
                },
                {
                    id: 2,
                    label: "Aaron Long",
                    avatar: "https://snippet.dhtmlx.com/codebase/data/kanban/03/user2.jpeg",
                },
                {
                    id: 3,
                    label: "Angela Allen",
                    avatar: "https://snippet.dhtmlx.com/codebase/data/kanban/03/user3.png",
                },
                {
                    id: 4,
                    label: "Angela Long",
                    avatar: "https://snippet.dhtmlx.com/codebase/data/kanban/03/user4.png",
                },
            ];

            const cardShape = {
                label: true,
                description: true,
                progress: true,
                start_date: true,
                end_date: true,
                users: {
                    show: true,
                    values: users,
                },
                priority: {
                    show: true,
                    values: [
                        { id: 1, color: "#FF5252", label: "High" },
                        { id: 2, color: "#FFC975", label: "Medium" },
                        { id: 3, color: "#65D3B3", label: "Low" },
                    ],
                },
                color: true,
                menu: true,
                cover: true,
                attached: false,
            };

            const columns = [
                {
                    label: "Backlog",
                    id: "backlog",
                },
                {
                    label: "In progress",
                    id: "inprogress",
                },
                {
                    label: "Testing",
                    id: "testing",
                },
                {
                    label: "Done",
                    id: "done",
                },
            ];

            const rows = [
                {
                    label: "Feature",
                    id: "feature",
                },
                {
                    label: "Task",
                    id: "task",
                },
            ];

            const cards = [
            ];

            const groupData = [
                { id: "column", label: "Column", columns },
                {
                    id: "sprint",
                    label: "Sprint",
                    columns: [
                        { id: "1.0", label: "1.0" },
                        { id: "1.1", label: "1.1" },
                        { id: "1.2", label: "1.2" },
                    ],
                },
                {
                    id: "type",
                    label: "Type",
                    columns: [
                        { id: "feature", label: "Feature" },
                        { id: "task", label: "Task" },
                    ],
                },
                {
                    id: "priority",
                    label: "Priority",
                    columns: [
                        { id: 1, label: "High" },
                        { id: 2, label: "Medium" },
                        { id: 3, label: "Low" },
                    ],
                },
            ];

            const links = [
                {
                    id: 1,
                    masterId: 1,
                    slaveId: 3,
                    relation: "parent",
                },
                {
                    id: 3,
                    masterId: 1,
                    slaveId: 3,
                    relation: "duplicate",
                },
                {
                    id: 4,
                    masterId: 2,
                    slaveId: 1,
                    relation: "relatesTo",
                },
            ];

            return {
                rows,
                columns,
                cards,
                users,
                cardShape,
                groupData,
                links,
            };
        }

        const { columns, cards } = getData();

        const board = new kanban.Kanban("#root", {
            cards,
            columns
        });

        new kanban.Toolbar("#toolbar", {
            api: board.api,
            items: [
                "search",
                "spacer",
                "sort",
                "addColumn",
                "addRow"
            ]
        });

        board.api.on("drag-card", (obj) => {
            console.log(obj.columnId);
        });
    </script>
</x-app-layout>
