import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { MaterialReactTable } from 'material-react-table';
import "./Filter.scss";
import staticData from "../../staticData.json";
import { MRT_Localization_UK } from 'material-react-table/locales/uk';

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
        filterVariant: "range",
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
      const formattedData = staticData.map(row => {
        const dateObject = new Date(row.date * 1000);

        return {
          ...row,
          date: `${dateObject.getDate().toString().padStart(2, '0')}-${(dateObject.getMonth() + 1).toString().padStart(2, '0')}-${dateObject.getFullYear()}`,
          time: `${dateObject.getHours().toString().padStart(2, '0')}:${dateObject.getMinutes().toString().padStart(2, '0')}`

        }
      });

      setData(formattedData);
      setIsLoading(false);
    }
  }, []);

  useLayoutEffect(() => {
    try {
      rowVirtualizerInstanceRef.current?.scrollToIndex?.(0);
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div className="table-container">
      {<h2 className="table-container__header">Фільтри</h2>}
      <MaterialReactTable
        columns={columns}
        data={data}
        enableBottomToolbar={false}
        enableGlobalFilterModes
        enablePagination={false}
        enableFacetedValues={false}
        enableRowNumbers
        enableRowVirtualization
        muiTableContainerProps={{ sx: { maxHeight: `72vh` } }}
        onSortingChange={setSorting}
        state={{ isLoading, sorting }}
        rowVirtualizerInstanceRef={rowVirtualizerInstanceRef}
        rowVirtualizerProps={{ overscan: 8 }}
        localization={MRT_Localization_UK}
      />
    </div>
  );
};

export default Filter;
