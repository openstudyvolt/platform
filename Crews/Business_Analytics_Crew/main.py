from crewai import Agent, Task, Crew, Process

analyst = Agent(
    role='Data Analyst',
    goal='Provide actionable business insights',
    backstory='Skilled in analyzing datasets to uncover trends.'
)

reporter = Agent(
    role='Report Writer',
    goal='Present findings in clear reports',
    backstory='Experienced at summarizing analytics results for stakeholders.'
)

task_analyze = Task(
    description='Analyze available business data for opportunities.',
    expected_output='Key metrics and insights.',
    agent=analyst
)

task_report = Task(
    description='Create a report summarizing the insights.',
    expected_output='A written business analytics report.',
    agent=reporter
)

crew = Crew(
    agents=[analyst, reporter],
    tasks=[task_analyze, task_report],
    process=Process.sequential
)

if __name__ == '__main__':
    print(crew.kickoff())
