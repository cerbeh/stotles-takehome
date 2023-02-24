export type SearchRecordsRequest = {
  textSearch?: string;
  buyerId?: string;
  limit: number;
  offset: number;
};

export type ProcurementRecord = {
  id: string;
  title: string;
  description: string;
  publishDate: string;
  buyer: Buyer
  value: number;
  currency: string;
  stage: 'TENDER' | 'CONTRACT';
  award_date: string;
  close_date: string;
};

export type Buyer = {
  id: string;
  name: string;
}

export type SearchRecordsResponse = {
  records: ProcurementRecord[];
  endOfResults: boolean;
};

class Api {
  async searchRecords(
    request: SearchRecordsRequest
  ): Promise<SearchRecordsResponse> {
    const response = await fetch("/api/records", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(request),
    });
    return await response.json();
  }

  async getBuyers(): Promise<Buyer[]> {
    const response = await fetch("/api/buyers")
    return await response.json()
  }
}

export default Api;
