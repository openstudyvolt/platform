from crewai import Agent, Task, Crew, Process

planner = Agent(
    role='Planner',
    goal='Define clear development goals and milestones',
    backstory='Experienced project planner who outlines tasks for developers.'
)

developer = Agent(
    role='Developer',
    goal='Implement features following best practices',
    backstory='Software developer focused on delivering high quality code.'
)

task_plan = Task(
    description='Analyze project requirements and produce a development plan.',
    expected_output='A concise list of development tasks.',
    agent=planner
)

task_code = Task(
    description='Write code according to the plan.',
    expected_output='Source code implementing the planned features.',
    agent=developer
)

crew = Crew(
    agents=[planner, developer],
    tasks=[task_plan, task_code],
    process=Process.sequential
)

if __name__ == '__main__':
    result = crew.kickoff()
    print(result)
