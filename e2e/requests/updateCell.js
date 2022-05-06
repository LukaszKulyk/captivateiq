import { endpointUpdateCell } from '../support/endpoints';

function requestOptions(cellId) {
  return {
    method: 'PUT',
    url: `${endpointUpdateCell()}${cellId}/`,
    body: {},
  };
}

export function putCell(cellId, payloadData) {
  const request = requestOptions(cellId);
  request.body = payloadData;
  return request;
}
