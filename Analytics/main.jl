# Read json file in the API folder and return the data in a DataFrame
using DataFrames, JSON, Dates, Plots

path_to_file = "API/goldData.json";

# import json file
json_data = JSON.parsefile(path_to_file)

# convert json data to DataFrame
df = DataFrame(json_data);

# convert date string to date object
df.close = parse.(Float64, replace.(df.close, "," => ""))
df.date
df = df[end:-1:1, :]

println(df)
# Determine the indices for xticks
xticks_indices = range(1, stop=length(df.date), length=5)

# Map indices to dates
xticks_dates = df.date[Int.(round.(xticks_indices))]

#Add padding to the plot

plot(df.date, df.close, label="Gold Price", xlab="Date", ylab="Price", title="Gold Price", fmt=:png, dpi=300, size=(800, 400), xticks=(xticks_indices, xticks_dates), legend=:topleft, linewidth=2, margin=10Plots.mm)


