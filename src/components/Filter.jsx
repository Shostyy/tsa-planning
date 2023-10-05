import React, { useEffect, useMemo, useRef, useState } from 'react';
import { MaterialReactTable } from 'material-react-table';
import "./Filter.scss";
import staticData from "../staticData.json";


export const Filter = () => {
  const columns = useMemo(
    () => [
        {
          accessorKey: "id",
          header: "ID Транзакції",
        },
        {
          accessorKey: "date",
          header: "Дата транзакції",
          
        },
        {
          accessorKey: "name",
          header: "Ім'я",
          
        },
        {
          accessorKey: "amount",
          header: "Вартість",
          
        },
        {
          accessorKey: "time",
          header: "Час транзакції",
        },
      ],
    [],
  );

  const rowVirtualizerInstanceRef = useRef(null);

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sorting, setSorting] = useState([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setData(staticData);
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    try {
      rowVirtualizerInstanceRef.current?.scrollToIndex?.(0);
    } catch (error) {
      console.error(error);
    }
  }, [sorting]);

  return (
    <div className="table-container">
      <h2 className="table-container__header">Фільтри</h2>
        <MaterialReactTable
        columns={columns}
        data={data}
        enableBottomToolbar={false}
        enableGlobalFilterModes
        enablePagination={false}
        enableRowNumbers
        enableRowVirtualization
        muiTableContainerProps={{ sx: { maxHeight: '1000px' } }}
        onSortingChange={setSorting}
        state={{ isLoading, sorting }}
        rowVirtualizerInstanceRef={rowVirtualizerInstanceRef}
        rowVirtualizerProps={{ overscan: 8 }}
        />
      
    </div>
  );
};
