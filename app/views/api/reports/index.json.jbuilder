@reports.each do |report|
  json.set! report.id do
    json.extract! report, :start_time, :amount, :end_time, :user_id
  end
end
