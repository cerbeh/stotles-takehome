import { Table } from "antd";
import { ColumnType } from "antd/lib/table";
import React from "react";
import { ProcurementRecord } from "./Api";
import ProcurementRecordPreviewModal from "./ProcurementRecordPreview";

type Props = {
  records: ProcurementRecord[];
};

function RecordsTable(props: Props) {
  const { records } = props;
  const [previewedRecord, setPreviewedRecord] = React.useState<
    ProcurementRecord | undefined
  >();

  const columns = React.useMemo<ColumnType<ProcurementRecord>[]>(() => {
    return [
      {
        title: "Published",
        render: (record: ProcurementRecord) =>
          new Date(record.publishDate).toLocaleDateString(),
      },
      {
        title: "Title",
        render: (record: ProcurementRecord) => {
          const handleClick = (e: React.MouseEvent) => {
            e.preventDefault();
            setPreviewedRecord(record);
          };
          return (
            <a href="#" onClick={handleClick}>
              {record.title}
            </a>
          );
        },
      },
      {
        title: "Buyer name",
        render: (record: ProcurementRecord) => record.buyer.name,
      },
      {
        title: "Value",
        render: (record: ProcurementRecord) => {
          if (record.currency === null) {
            return record.value
          }
          const CURRENCY_LOOKUP = {
            'GBP': {
              prefix: '£',
            },
            'EUR': {
              prefix: '€',
            },
            'GBP/day': {
              prefix: '£',
              suffix: ' per day',
            }
          }
          const { prefix, suffix = '' } = CURRENCY_LOOKUP[record.currency]
          return `${prefix}${record.value.toLocaleString('en-UK')}${suffix}`
        }
      },
      {
        title: "Stage",
        render: (record: ProcurementRecord) => {

          const stageCopy: {
            [key in ProcurementRecord['stage']]: string
          } = {
            'TENDER': `Open until ${record.close_date} `,
            'CONTRACT': `Awarded on ${record.award_date} `
          }
          return stageCopy[record.stage]
        }
      }
    ];
  }, []);
  return (
    <>
      <Table columns={columns} dataSource={records} pagination={false} />
      <ProcurementRecordPreviewModal
        record={previewedRecord}
        onClose={() => setPreviewedRecord(undefined)}
      />
    </>
  );
}

export default RecordsTable;
