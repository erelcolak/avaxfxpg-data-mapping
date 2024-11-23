import { dataSources } from "../_mapped/_dataSources";

export const getDataSourceId = (customer: any): string => {
  if (
    customer.source &&
    dataSources.find((dataSource) => dataSource.name === customer.source)
  ) {
    return dataSources.find((dataSource) => dataSource.name === customer.source)
      ?.id as string;
  } else if (
    customer.source2 &&
    dataSources.find((dataSource) => dataSource.name === customer.source2)
  ) {
    return dataSources.find(
      (dataSource) => dataSource.name === customer.source2
    )?.id as string;
  } else if (
    customer.source3 &&
    dataSources.find((dataSource) => dataSource.name === customer.source3)
  ) {
    return dataSources.find(
      (dataSource) => dataSource.name === customer.source3
    )?.id as string;
  } else {
    return dataSources.find((dataSource) => dataSource.name === "Diğer")
      ?.id as string;
  }
};
