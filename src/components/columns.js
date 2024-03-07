import ColumnFilter from "./ColumnFilter"

export const COLUMNS=[
    {
        Header:'Id',
        Footer:'Id',
        accessor:'id',
        //Filter:ColumnFilter,
        disableFilters:true,
        sticky:'left'
    },
    {
        Header:'First Name',
        Footer:'First Name',
        accessor:'first_name',
        //Filter:ColumnFilter,
        sticky:'left'
    },
    {
        Header:'Last Name',
        Footer:'Last Name',
        accessor:'last_name',
        //Filter:ColumnFilter,
        sticky:'left'
    },
    // {  //we can also avoid its not that we have to render everything
    //we can render whatever we want from json
    //     Header:'Email',
    //     accessor:'email'
    // },
    {
        Header:'Gender',
        Footer:'Gender',
        accessor:'gender',
        //Filter:ColumnFilter,
        sticky:'left'
        
    },
    {
        Header:'Phone',
        Footer:'Phone',
        accessor:'phone',
        //Filter:ColumnFilter,
        sticky:'right'
    }
]

export const GROUPED_COLUMNS=[
    {
        Header:'Id',
        Footer:'Id',
        accessor:'id'
    },
    {
        Header:'Name',
        Footer:'Name',
        columns:[
            {
                Header:'First Name',
                Footer:'First Name',
                accessor:'first_name'
            },
            {
                Header:'Last Name',
                Footer:'Last Name',
                accessor:'last_name'
            },
        ]

    },
    {
      Header:'Info',
      Footer:'Info',
      columns:[
        {
            Header:'Gender',
            Footer:'Gender',
            accessor:'gender'
        },
        {
            Header:'Phone',
            Footer:'Phone',
            accessor:'phone'
        }
      ]
    }
]