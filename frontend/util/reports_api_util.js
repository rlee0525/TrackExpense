export const fetchReports = () => (
  $.ajax({
    method: 'GET',
    url: '/api/reports'
  })
);

export const fetchReport = id => (
  $.ajax({
    method: 'POST',
    url: `/api/reports/${id}`
  })
);

export const createReport = report => (
  $.ajax({
    method: 'POST',
    url: `/api/reports`,
    data: { report }
  })
);

export const updateReport = report => (
  $.ajax({
    method: 'PATCH',
    url: `/api/reports/${report.id}`,
    data: { report }
  })
);

export const destroyReport = id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/reports/${id}`
  })
);
