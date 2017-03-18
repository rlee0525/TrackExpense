class Api::ReportsController < ApplicationController
  def index
    @reports = current_user.reports
  end

  def create
    @report = Report.new(report_params)
    @report.user_id = current_user.id

    if @report.save
      render "api/reports/show"
    else
      render json: @report.errors.full_message, status: 422
    end
  end

  def show
    @report = current_user.reports.find(params[:id])
  end

  def edit
    @report = current_user.reports.find(params[:id])
  end

  def update
    @report = current_user.reports.find(params[:id])

    if @report.update(report_params)
      render "api/reports/show"
    else
      render json: @report.errors.full_message, status: 422
    end
  end

  def destroy
    @report = current_user.reports.find(params[:id])
    @report.destroy

    render json: @report
  end

  private

  def report_params
    params.require(:report).permit(:start_time, :end_time, :amount, :user_id)
  end
end
